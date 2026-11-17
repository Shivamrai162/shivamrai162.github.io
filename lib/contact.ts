export type ContactInput = { name: string; email: string; message: string; website: string };
export function validateContact(input: unknown): { data?: ContactInput; error?: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { error: "Please provide your name, email and message." };
  const value = input as Record<string, unknown>;
  const fields = ["name", "email", "message", "website"];
  if (fields.some(key => value[key] !== undefined && typeof value[key] !== "string")) return { error: "Invalid form fields." };
  const data = Object.fromEntries(fields.map(key => [key, String(value[key] ?? "").trim()])) as ContactInput;
  if (data.name.length < 2 || data.name.length > 100) return { error: "Please enter a name between 2 and 100 characters." };
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: "Please enter a valid email address." };
  if (data.message.length < 10 || data.message.length > 4000) return { error: "Please enter a message between 10 and 4,000 characters." };
  return { data };
}
