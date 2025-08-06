import React, { useState } from 'react'
import { Brain, Loader, CheckCircle, AlertCircle } from 'lucide-react'
import { generateAIOrders } from '../services/aiService'

const AIOrderGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [recommendations, setRecommendations] = useState([])
  const [error, setError] = useState(null)

  const handleGenerateOrders = async () => {
    setIsGenerating(true)
    setError(null)
    
    try {
      const orders = await generateAIOrders()
      setRecommendations(orders)
    } catch (err) {
      setError('Failed to generate AI recommendations. Please try again.')
      console.error('AI order generation error:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-600" />
          <span className="font-medium">AI Order Recommendations</span>
        </div>
        <button
          onClick={handleGenerateOrders}
          disabled={isGenerating}
          className="btn btn-primary flex items-center space-x-2"
        >
          {isGenerating ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Brain className="h-4 w-4" />
              <span>Generate Recommendations</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-purple-800">{rec.supplier}</h4>
                  <p className="text-sm text-purple-700 mt-1">{rec.reasoning}</p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-purple-800">Recommended items:</span>
                    <ul className="text-sm text-purple-700 mt-1">
                      {rec.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm font-medium text-purple-800 mt-2">
                    Estimated total: {rec.estimatedCost}
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="btn btn-success btn-sm">
                    <CheckCircle size={14} />
                    Approve
                  </button>
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isGenerating && recommendations.length === 0 && !error && (
        <div className="text-center py-8 text-gray-500">
          <Brain className="h-12 w-12 mx-auto mb-3 text-gray-400" />
          <p>Click "Generate Recommendations" to get AI-powered order suggestions</p>
        </div>
      )}
    </div>
  )
}

export default AIOrderGenerator