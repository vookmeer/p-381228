const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

const clerkMiddleware = ClerkExpressWithAuth({
  onError: (req, res, next, error) => {
    console.error("Clerk auth error:", error);
    res.status(401).json({ message: "Unauthorized" });
  },
});

module.exports = clerkMiddleware;