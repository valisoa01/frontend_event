// Base types
export interface BaseEntity {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}

// Event types
export interface Event extends BaseEntity {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location?: string;
  sessions?: Session[];
}

// Session types
export interface Session extends BaseEntity {
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  eventId: number;
  roomId: number;
  event?: Event;
  room?: Room;
  speakers?: Speaker[];
  questions?: Question[];
  isLive?: boolean;
}

// Room types
export interface Room extends BaseEntity {
  name: string;
  capacity?: number;
  sessions?: Session[];
}

// Speaker types
export interface Speaker extends BaseEntity {
  name: string;
  photoUrl?: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  sessions?: Session[];
}

// Question types
export interface Question extends BaseEntity {
  content: string;
  sessionId: number;
  authorName?: string;
  upvotes: number;
  session?: Session;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  pageSize?: number;
}
