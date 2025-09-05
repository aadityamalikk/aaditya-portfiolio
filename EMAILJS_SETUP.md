# EmailJS Setup Guide for Your Portfolio

## Gmail API Authentication Error Fix

If you're getting "Gmail_API: Request had insufficient authentication scopes" error, follow these steps:

## Option 1: Fix EmailJS Gmail Service (Recommended)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "CREATE FREE ACCOUNT"
3. Sign up with your email address
4. Verify your email when you receive the confirmation

### Step 2: Connect Gmail Service (IMPORTANT - Follow Exactly)
1. Login to your EmailJS dashboard
2. Go to "Email Services" in the left sidebar
3. Click "Add New Service"
4. Select "Gmail"
5. **IMPORTANT**: When prompted, make sure to grant ALL requested permissions including:
   - Read, compose, send, and permanently delete emails
   - Manage drafts and send emails on your behalf
6. If you see limited permissions, click "Advanced" and then "Go to EmailJS (unsafe)" to grant full permissions
7. Complete the OAuth flow with your Gmail (aadityamalikcse02@gmail.com)
8. **SAVE YOUR SERVICE ID** (e.g., service_abc123)

### Step 3: Alternative - Use Personal Email Service
If Gmail keeps having permission issues:
1. In EmailJS dashboard, go to "Email Services"
2. Instead of Gmail, select "Personal Email Service"
3. Use these SMTP settings for Gmail:
   - SMTP Server: smtp.gmail.com
   - Port: 587 or 465
   - Username: aadityamalikcse02@gmail.com
   - Password: [Generate App Password - see below]

### Generate Gmail App Password (for Personal Email Service):
1. Go to Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Select app: Mail → Generate
4. Use this 16-character password in EmailJS

## Option 2: Use Alternative Email Service (Easier)

Instead of Gmail, use EmailJS with other providers:

### Outlook/Hotmail:
1. Create a free Outlook account if needed
2. In EmailJS, select "Outlook" service
3. Much easier OAuth process

### SendGrid (Professional):
1. Create free SendGrid account (100 emails/day free)
2. Get API key from SendGrid
3. In EmailJS, select "SendGrid" service
4. Enter your API key

## Step 3: Create Email Template
1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Fill in the template:
   - **To Email**: aadityamalikcse02@gmail.com
   - **From Name**: {{from_name}}
   - **Reply To**: {{from_email}}
   - **Subject**: Portfolio Contact: Message from {{from_name}}
   - **Content (HTML)**:
   ```html
   <h2>New Contact Form Submission</h2>
   
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   
   <p><strong>Message:</strong></p>
   <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
       {{message}}
   </div>
   
   <hr>
   <p><em>This message was sent from your portfolio contact form.</em></p>
   ```
4. Click "Save"
5. **SAVE YOUR TEMPLATE ID** (e.g., template_xyz789)

## Step 4: Get Public Key
1. Go to "Account" in the left sidebar
2. Find your "Public Key" 
3. **SAVE YOUR PUBLIC KEY** (e.g., user_abc123xyz)

## Step 5: Update Your Code
Replace the placeholder values in `/src/components/Contact.tsx`:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',    // Replace with Service ID from Step 2
  TEMPLATE_ID: 'your_actual_template_id',  // Replace with Template ID from Step 3
  PUBLIC_KEY: 'your_actual_public_key'     // Replace with Public Key from Step 4
};
```

## Step 6: Test the Contact Form
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the email!

## Fallback Feature
The current code includes a fallback mechanism:
- If EmailJS fails, it automatically opens the user's email client
- The email is pre-filled with all the form data
- This ensures the contact form always works

## Troubleshooting Authentication Issues
- **Gmail permission error**: Try the "Personal Email Service" option with App Password
- **OAuth issues**: Use Outlook or SendGrid instead of Gmail
- **Still not working**: The mailto fallback will handle all form submissions
- **Testing**: Use a test email service like Mailtrap for development

## Security Notes
- EmailJS keeps your credentials secure on their servers
- App passwords are safer than your main Gmail password
- Free plan includes 200 emails/month (perfect for a portfolio)
- The fallback ensures contact form always works