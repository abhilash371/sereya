# 🚀 Sereya Deployment Guide - Render (Free Tier)

## 📋 Prerequisites

Before deploying, you need:
1. ✅ GitHub repository (you already have this!)
2. ✅ MongoDB Atlas account with connection string (you have this!)
3. 📝 Render account (free tier): https://render.com
4. 📝 JWT_SECRET (a random strong string for security)

---

## 🎯 Step-by-Step Deployment

### **Step 1: Prepare Your Code**
✅ Already done! We've updated:
- `.env.example` - Documents required variables
- `frontend/js/api.js` - Detects environment (localhost vs production)
- `render.yaml` - Deployment configuration

### **Step 2: Push to GitHub**
```bash
cd "c:\Users\abhil\OneDrive\Desktop\New folder\Sereya"
git add .
git commit -m "Deployment setup: Add render.yaml and env configuration"
git push origin main
```

### **Step 3: Create Render Account**
1. Go to https://render.com
2. Click "Sign up" 
3. Connect with GitHub (recommended)
4. Authorize Sereya repository

### **Step 4: Deploy Backend Service**

**On Render Dashboard:**
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository `sereya`
3. Fill in details:
   - **Name:** `sereya-backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

4. Click **"Advanced"** and add environment variables:
   ```
   MONGODB_URI = [your MongoDB Atlas connection string]
   JWT_SECRET = [generate a random 32+ character string]
   NODE_ENV = production
   PORT = 10000
   ```

5. Click **"Create Web Service"**
6. Wait ~3-5 minutes for deployment

### **Step 5: Get Your Backend URL**
- Once deployed, Render will show you a URL like: `https://sereya-backend.onrender.com`
- Copy this URL (you'll need it for frontend)

### **Step 6: Deploy Frontend (Option A - Easy)**
Your backend already serves the frontend! Users can access:
```
https://sereya-backend.onrender.com
```

### **Step 7: (Optional) Deploy Frontend Separately on Vercel**
For better performance, you can host frontend on Vercel:

1. Go to https://vercel.com
2. Import your GitHub repository
3. In build settings:
   - Framework: **None (Custom)**
   - Output Directory: `frontend`
4. Add environment variable:
   ```
   REACT_APP_API_URL = https://sereya-backend.onrender.com/api
   ```
5. Deploy

Then update `frontend/js/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api'
    : `${window.location.protocol}//${window.location.hostname}/api`);
```

---

## 🔐 Important Notes

### Free Tier Limitations
- ⏱️ Services spin down after 15 minutes of inactivity (they wake up when accessed, ~30 sec delay)
- 💾 500MB RAM per service
- ⛔ No custom domains (unless you upgrade)
- 📊 Limited bandwidth

### How to Generate JWT_SECRET
In PowerShell:
```powershell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 64 | % {[char]$_})
```

---

## ✅ Testing After Deployment

1. Visit: `https://sereya-backend.onrender.com`
2. You should see the Sereya app
3. Try creating an account and taking the quiz
4. Check Render logs if anything fails

---

## 🐛 Troubleshooting

**"Cannot GET /api/health"**
- Wait for backend to fully deploy (check Render logs)
- Verify MONGODB_URI is correct

**"MongoDB connection failed"**
- Check your MongoDB Atlas connection string format
- Ensure IP address is whitelisted (0.0.0.0/0 for simplicity)

**"Authentication not working"**
- Verify JWT_SECRET is set in Render environment variables
- Check backend logs on Render dashboard

**"Cold start taking too long"**
- Normal on free tier! Apps sleep after 15 min of inactivity

---

## 📊 Free vs Paid on Render

| Feature | Free | Paid |
|---------|------|------|
| Sleep timeout | 15 min | Never |
| RAM | 500 MB | 1GB+ |
| Bandwidth | Limited | Generous |
| Cost | $0 | $7+/month |

---

## 🚀 Next Steps
1. Deploy backend first
2. Test thoroughly
3. Share your live URL!

Your deployed app will be accessible at: **https://sereya-backend.onrender.com**

Need help? Check Render logs in the dashboard for error messages.
