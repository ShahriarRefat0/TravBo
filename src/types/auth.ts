// Authentication types
export type AuthUser = {
  id: string;
  name: string;
  email: string;
  image?: string;
};

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user?: AuthUser;
  error?: string;
};

export type GoogleAuthProvider = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
};
