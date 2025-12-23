import { trackChairs } from "./data.ts";

// you said you ONLY want track chairs
const trackChairMembers = trackChairs.flatMap(c => c.members);

// example processing
const cleaned = trackChairMembers.map(m => ({
  name: m.name.trim(),
  role: m.role ?? "",
  image: m.imageUrl
}));

console.log(cleaned);
