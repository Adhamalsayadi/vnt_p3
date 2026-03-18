import { User } from "@/types/users";

export interface LoginResponse {
  success: boolean;
  message: string;
  role?: "Client" | "Supplier" | "Admin";
  user?: User;
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  // Simulate API Delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // --- MOCK LOGIC ---
  // In a real app, you would use axios to call your backend
  // and get the real user role.

  if (email === "mock@m.com" && password === "mock") {
    return {
      success: true,
      message: "Login successful",
      role: "Client",
      user: { id: "1", name: "mock Client", email, role: "Client", phone: "" },
    };
  }

  if (email === "mocks@m.com" && password === "mock") {
    return {
      success: true,
      message: "Login successful",
      role: "Supplier",
      user: {
        id: "2",
        name: "mock Supplier",
        email,
        role: "Supplier",
        phone: "",
      },
    };
  }

  return { success: false, message: "Invalid email or password" };
}
