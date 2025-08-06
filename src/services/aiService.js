import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateAIOrders() {
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for a food & beverage manufacturing company. Generate realistic order recommendations based on typical inventory needs. Return a JSON array of order recommendations."
        },
        {
          role: "user",
          content: `Based on current inventory levels and sales trends for a small food & beverage manufacturer, generate 2-3 order recommendations. Each recommendation should include:
          - supplier name
          - list of items to order
          - reasoning for the recommendation
          - estimated cost
          
          Focus on realistic scenarios like low stock alerts, seasonal demand, or bulk purchase opportunities.`
        }
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    
    // Try to parse JSON response, fallback to mock data if parsing fails
    try {
      return JSON.parse(content);
    } catch {
      // Fallback mock data
      return [
        {
          supplier: "Bean Supply Co.",
          items: ["Coffee Beans Premium Grade (100kg)", "Coffee Filters (2000pc)"],
          reasoning: "Current coffee bean inventory is at 120 units, approaching the reorder point of 50. High sales velocity suggests ordering now to avoid stockouts.",
          estimatedCost: "$1,200"
        },
        {
          supplier: "Sweet Supplies",
          items: ["Organic Sugar (50kg)", "Vanilla Extract (5L)"],
          reasoning: "Sugar inventory is critically low at 30 units, well below the 100-unit reorder point. This is urgent to maintain production.",
          estimatedCost: "$350"
        },
        {
          supplier: "Package Pro",
          items: ["Eco-friendly Cups (3000pc)", "Biodegradable Lids (3000pc)"],
          reasoning: "Seasonal demand increase expected. Current packaging inventory sufficient but bulk ordering now provides 15% discount.",
          estimatedCost: "$450"
        }
      ];
    }
  } catch (error) {
    console.error('AI service error:', error);
    
    // Return mock data as fallback
    return [
      {
        supplier: "Bean Supply Co.",
        items: ["Coffee Beans Premium Grade (100kg)", "Coffee Filters (2000pc)"],
        reasoning: "Current coffee bean inventory is at 120 units, approaching the reorder point of 50. High sales velocity suggests ordering now to avoid stockouts.",
        estimatedCost: "$1,200"
      },
      {
        supplier: "Sweet Supplies", 
        items: ["Organic Sugar (50kg)", "Vanilla Extract (5L)"],
        reasoning: "Sugar inventory is critically low at 30 units, well below the 100-unit reorder point. This is urgent to maintain production.",
        estimatedCost: "$350"
      }
    ];
  }
}