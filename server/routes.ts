import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all posts
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  // Get posts by category
  app.get("/api/posts/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const posts = await storage.getPostsByCategory(category);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts by category" });
    }
  });

  // Get featured post
  app.get("/api/posts/featured", async (req, res) => {
    try {
      const post = await storage.getFeaturedPost();
      if (!post) {
        return res.status(404).json({ message: "No featured post found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured post" });
    }
  });

  // Get post by slug
  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getPostBySlug(slug);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  // Create contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid contact data", 
          errors: result.error.errors 
        });
      }

      const contact = await storage.createContact(result.data);
      res.json({ message: "Message sent successfully", contact });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Subscribe to newsletter
  app.post("/api/subscribe", async (req, res) => {
    try {
      const result = insertSubscriberSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid email address", 
          errors: result.error.errors 
        });
      }

      // Check if already subscribed
      const existing = await storage.getSubscriberByEmail(result.data.email);
      if (existing) {
        return res.status(409).json({ message: "Email is already subscribed" });
      }

      const subscriber = await storage.createSubscriber(result.data);
      res.json({ message: "Successfully subscribed to newsletter", subscriber });
    } catch (error) {
      res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
