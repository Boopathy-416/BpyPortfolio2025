
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const submitContactForm = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
