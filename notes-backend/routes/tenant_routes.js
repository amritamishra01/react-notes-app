const express = require("express");
const Tenant = require("../models/Tenant");
const { authenticator } = require("../middleware/auth");
const router = express.Router();

router.post("/:slug/upgrade", authenticator, async (req, res) => {
  try {
    const { slug } = req.params;

    // ✅ only admins can upgrade
    if (req.user.role !== "Admin") {
      return res.status(403).send({ message: "Only admins can upgrade", status: 0 });
    }

    // ✅ check tenant
    const tenant = await Tenant.findOne({ slug });
    if (!tenant) {
      return res.status(404).send({ message: "Tenant not found", status: 0 });
    }

    // ✅ check tenant match
    if (tenant._id.toString() !== req.user.tenantId) {
      return res.status(403).send({ message: "Not your tenant", status: 0 });
    }

    tenant.plan = "PRO";
    await tenant.save();

    console.log(`🚀 Tenant upgraded: ${tenant.slug}`);
    res.send({ message: "Tenant upgraded to PRO", status: 1 });
  } catch (err) {
    console.error("❌ Upgrade error:", err.message);
    res.send({ message: err.message, status: 0 });
  }
});

module.exports = router;
