import React from "react";

export const FaviconGenerator = () => {
  React.useEffect(() => {
    // Create a bookmark-shaped favicon dynamically
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Clear canvas
      ctx.clearRect(0, 0, 32, 32);
      
      // Draw bookmark shape with more professional proportions
      ctx.beginPath();
      ctx.moveTo(8, 2);
      ctx.lineTo(24, 2);
      ctx.lineTo(24, 22);
      ctx.lineTo(16, 18);
      ctx.lineTo(8, 22);
      ctx.lineTo(8, 2);
      ctx.closePath();
      
      // Fill with primary color
      ctx.fillStyle = "#0A2342"; // Primary color
      ctx.fill();
      
      // Add more subtle border
      ctx.strokeStyle = "#D5A021"; // Secondary/gold color
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // More professional text
      ctx.fillStyle = "#D5A021"; // Gold text instead of white for better legal look
      ctx.font = "bold 10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("C", 16, 10);
      
      // Add scales of justice symbol
      ctx.beginPath();
      ctx.moveTo(16, 14);
      ctx.lineTo(16, 16);
      ctx.strokeStyle = "#D5A021";
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Scales
      ctx.beginPath();
      ctx.moveTo(12, 14);
      ctx.lineTo(20, 14);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(12, 14, 2, 0, Math.PI * 2);
      ctx.arc(20, 14, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(213, 160, 33, 0.5)"; // Semi-transparent gold
      ctx.fill();
      
      // Convert to favicon - UPDATED implementation for better browser compatibility
      let link = document.querySelector("link[rel*='icon']");
      
      // If no favicon link exists, create one
      if (!link) {
        link = document.createElement("link");
        link.rel = "shortcut icon";
        document.head.appendChild(link);
      }
      
      // Update favicon properties
      link.type = "image/x-icon";
      link.href = canvas.toDataURL("image/x-icon");
      
      // Force browser to recognize the favicon change
      const docHead = document.head || document.getElementsByTagName('head')[0];
      
      // Remove any existing favicon links to avoid conflicts
      Array.from(docHead.querySelectorAll('link[rel*="icon"]'))
        .filter(el => el !== link)
        .forEach(el => docHead.removeChild(el));
        
      console.log("Favicon generated and applied successfully");
    }
  }, []);
  
  return null;
};