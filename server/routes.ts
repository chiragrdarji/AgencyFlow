import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure SMTP transporter

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.elasticemail.com",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: "info@smartsync.one",
      pass: "8741EEDFC9A3E7BDC435610B77191C78B8B2",
    },
  });
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const data = req.body;

      const emailContent = `
      New Contact Form Submission from Smart Sync One Website
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data?.company || "N/A"}
      Subject: ${data?.subject || "N/A"}
      
      Message:
      ${data.message}
      
      ---
      Submitted on: ${new Date().toLocaleString()}
    `;
      // Send email to admin
      const adminMailOptions = {
        from: process.env.SMTP_FROM || "info@smartsync.one",
        to: process.env.CONTACT_EMAIL || "support@smartsync.one",
        subject: `New Contact: ${data.subject}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Company:</strong> ${data?.company || 'N/A'}</p>
              <p><strong>Subject:</strong> ${data?.subject || 'N/A'}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3>Message:</h3>
              <p style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">${data.message || 'N/A'}</p>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        `
      };

      // Send confirmation email to user
      const userMailOptions = {
        from: process.env.SMTP_FROM || "info@smartsync.one",
        to: data.email,
        subject: "Thank you for contacting Smart Sync One",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Thank You for Your Message</h2>
            <p>Hi ${data.name},</p>
            <p>Thank you for reaching out to Smart Sync One. We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your Message Summary:</h3>
               <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Subject:</strong> ${data?.subject || "N/A"}</p>
              <p><strong>Company:</strong> ${data?.company || "N/A"}</p>
              <p style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">${
                data.message || "N/A"
              }</p>
            </div>
            
            <p>If you have any urgent questions, feel free to call us at <strong>+1 630 861 8263</strong> during business hours (Mon-Fri, 9am-6pm EST).</p>
            
            <p>Best regards,<br>
            The Smart Sync One Team</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Smart Sync One Powered By   Variance infotech LLC<br>
              30 N Gould St. Sheridan,WY 82801 USA<br>
              info@smartsync.one
            </p>
          </div>
        `,
      };
      // Send both emails
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);

      res.json({
        success: true,
        message: "Thank you for your message. We'll get back to you within 24 hours!"
      });

    } catch (error: any) {
      console.error("Contact form error:", error);

      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Please check your form data and try again.",
          errors: error.errors
        });
      }

      res.status(500).json({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again or contact us directly."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
