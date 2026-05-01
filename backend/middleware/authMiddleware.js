import jwt from 'jsonwebtoken';

// Protect routes - verify JWT token
export async function protect(req, res, next) {
  try {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Check for token in body (fallback)
    if (!token && req.body.token) {
      token = req.body.token;
    }

    if (!token) {
      console.error('❌ No token found in request to', req.path);
      return res.status(401).json({ 
        error: '❌ Not authorized to access this route. Please login.' 
      });
    }

    console.log('🔐 Token found, verifying...', token.substring(0, 20) + '...');

    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_key_change_this');
      console.log('✅ Token verified for user:', decoded.id);
      req.userId = decoded.id;
      next();
    } catch (error) {
      console.error('❌ Token verification failed:', error.message);
      return res.status(401).json({ 
        error: '❌ Token expired or invalid. Please login again.' 
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Authentication error' });
  }
}

// Optional token verification (doesn't require token)
export async function optionalAuth(req, res, next) {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_key_change_this');
        req.userId = decoded.id;
      } catch (error) {
        // Token invalid, but continue without auth
        req.userId = null;
      }
    } else {
      req.userId = null;
    }

    next();
  } catch (error) {
    console.error('Optional auth middleware error:', error);
    req.userId = null;
    next();
  }
}
