import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Prepare email content
      const emailContent = `
        New Contact Form Submission from Dentrix Connector Website
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Company: ${validatedData.company}
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
        
        ---
        Submitted on: ${new Date().toLocaleString()}
      `;

      // Send email to admin
      const adminMailOptions = {
        from: process.env.SMTP_FROM || validatedData.email,
        to: process.env.CONTACT_EMAIL || "support@dentrixconnector.com",
        subject: `New Contact: ${validatedData.subject}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Company:</strong> ${validatedData.company}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3>Message:</h3>
              <p style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">${validatedData.message}</p>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        `
      };

      // Send confirmation email to user
      const userMailOptions = {
        from: process.env.SMTP_FROM || "support@dentrixconnector.com",
        to: validatedData.email,
        subject: "Thank you for contacting Dentrix Connector",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Thank You for Your Message</h2>
            <p>Hi ${validatedData.name},</p>
            <p>Thank you for reaching out to Dentrix Connector. We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Company:</strong> ${validatedData.company}</p>
              <p style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">${validatedData.message}</p>
            </div>
            
            <p>If you have any urgent questions, feel free to call us at <strong>(555) 123-4567</strong> during business hours (Mon-Fri, 9am-6pm EST).</p>
            
            <p>Best regards,<br>
            The Dentrix Connector Team</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Dentrix Connector LLC<br>
              123 Main Street, Suite 456<br>
              Austin, TX 78701<br>
              support@dentrixconnector.com
            </p>
          </div>
        `
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
