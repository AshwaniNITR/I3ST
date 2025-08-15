"use client"
import React from 'react'

export const CommitteesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-full w-full">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
      
      {/* Diagonal pattern */}
      <div 
        className="absolute inset-0 opacity-30 "
        style={{
          backgroundImage: `
            linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
            linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
            linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />
      
      {/* Accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-blue-50 opacity-40 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-blue-50 opacity-40 rounded-tr-full" />
    </div>
  )
}