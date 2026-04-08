export const bookingSteps = ["Select Deal", "Checkout", "Payment", "Confirmation"];

export const mealTypes = ["Breakfast", "Lunch", "Dinner"];

export const timeSlots = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

const sampleItem = {
  label: "Veg",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia...",
  originalPrice: 1999,
  price: 899,
};

export const foodItems = [
  sampleItem,
  { ...sampleItem },
  { ...sampleItem },
  { ...sampleItem },
];
