import { 
  type User, 
  type InsertUser,
  type Artwork,
  type InsertArtwork,
  type Comment,
  type InsertComment
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createArtwork(artwork: InsertArtwork): Promise<Artwork>;
  getArtworksByArtist(artistId: string): Promise<Artwork[]>;
  getArtwork(id: string): Promise<Artwork | undefined>;
  
  createComment(comment: InsertComment): Promise<Comment>;
  getCommentsByArtwork(artworkId: string): Promise<Comment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private artworks: Map<string, Artwork>;
  private comments: Map<string, Comment>;

  constructor() {
    this.users = new Map();
    this.artworks = new Map();
    this.comments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createArtwork(insertArtwork: InsertArtwork): Promise<Artwork> {
    const id = randomUUID();
    const artwork: Artwork = { 
      ...insertArtwork, 
      id,
      status: insertArtwork.status || "available",
      views: 0,
      likes: 0
    };
    this.artworks.set(id, artwork);
    return artwork;
  }

  async getArtworksByArtist(artistId: string): Promise<Artwork[]> {
    return Array.from(this.artworks.values()).filter(
      (artwork) => artwork.artistId === artistId,
    );
  }

  async getArtwork(id: string): Promise<Artwork | undefined> {
    return this.artworks.get(id);
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = randomUUID();
    const comment: Comment = { 
      ...insertComment, 
      id,
      createdAt: new Date()
    };
    this.comments.set(id, comment);
    return comment;
  }

  async getCommentsByArtwork(artworkId: string): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter((comment) => comment.artworkId === artworkId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
