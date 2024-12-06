const adminMiddleware = (req, res, next) => {
    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access denied. User is not an admin" });
    }
    
    // Continue to the next middleware or route handler
    next();
  };
  
  module.exports = adminMiddleware;
  

