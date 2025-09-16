// // notes-backend/seed/seed.js
// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const Tenant = require('../models/Tenant');
// const { UserModel } = require("../models/UserModel");

// const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp_seed';

// (async () => {
//   try {
//     console.log('[SEED] connecting to', MONGO);
//     await mongoose.connect(MONGO);
//     console.log('[SEED] connected to MongoDB');

//     const tenantsToCreate = [
//       { slug: 'acme', name: 'Acme Corporation', plan: 'FREE' },
//       { slug: 'globex', name: 'Globex Corporation', plan: 'FREE' },
//     ];

//     // Create or report tenants
//     for (const t of tenantsToCreate) {
//       const existing = await Tenant.findOne({ slug: t.slug });
//       if (existing) {
//         console.log(`[SEED] tenant exists: ${t.slug} (id=${existing._id})`);
//       } else {
//         const created = await Tenant.create(t);
//         console.log(`[SEED] created tenant: ${t.slug} (id=${created._id})`);
//       }
//     }

//     const usersToCreate = [
//       { name: 'Acme Admin', email: 'admin@acme.test', password: 'Admin@123', role: 'Admin', tenantSlug: 'acme' },
//       { name: 'Acme User',  email: 'user@acme.test',  password: 'User@123',  role: 'Member', tenantSlug: 'acme' },
//       { name: 'Globex Admin', email: 'admin@globex.test', password: 'Admin@123', role: 'Admin', tenantSlug: 'globex' },
//       { name: 'Globex User',  email: 'user@globex.test',  password: 'User@123',  role: 'Member', tenantSlug: 'globex' },
//     ];

//     for (const u of usersToCreate) {
//       const tenant = await Tenant.findOne({ slug: u.tenantSlug });
//       if (!tenant) {
//         console.error(`[SEED] SKIP user ${u.email} - tenant slug not found: ${u.tenantSlug}`);
//         continue;
//       }

//       const existingUser = await UserModel.findOne({ email: u.email });
//       if (existingUser) {
//         console.log(`[SEED] user exists: ${u.email}`);
//         // Ensure tenantId and role match expected
//         let updated = false;
//         if (!existingUser.tenantId || existingUser.tenantId.toString() !== tenant._id.toString()) {
//           existingUser.tenantId = tenant._id;
//           updated = true;
//         }
//         if (existingUser.role !== u.role) {
//           existingUser.role = u.role;
//           updated = true;
//         }
//         if (updated) {
//           await existingUser.save();
//           console.log(`[SEED] updated user: ${u.email}`);
//         }
//         continue;
//       }

//       const hashed = await bcrypt.hash(u.password, 10);

//       const createdUser = await UserModel.create({
//         name: u.name,
//         email: u.email,
//         password: hashed,
//         tenantId: tenant._id,
//         role: u.role,
//       });

//       console.log(
//         `[SEED] created user: ${u.email} (id=${createdUser._id}) role=${u.role} tenant=${u.tenantSlug}`
//       );
//     }

//     console.log('[SEED] finished successfully');
//     process.exit(0);
//   } catch (err) {
//     console.error('[SEED] error:', err);
//     process.exit(1);
//   }
// })();







// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const Tenant = require('../models/Tenant');
// const { UserModel } = require("../models/UserModel");

// const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp_seed';

// (async () => {
//   try {
//     console.log('[SEED] connecting to', MONGO);
//     await mongoose.connect(MONGO);
//     console.log('[SEED] connected to MongoDB');

//     const tenantsToCreate = [
//       { slug: 'acme', name: 'Acme Corporation', plan: 'FREE' },
//       { slug: 'globex', name: 'Globex Corporation', plan: 'FREE' },
//     ];

//     for (const t of tenantsToCreate) {
//       const existing = await Tenant.findOne({ slug: t.slug });
//       if (existing) {
//         console.log(`[SEED] tenant exists: ${t.slug} (id=${existing._id})`);
//       } else {
//         const created = await Tenant.create(t);
//         console.log(`[SEED] created tenant: ${t.slug} (id=${created._id})`);
//       }
//     }

//     // const usersToCreate = [
//     //   { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'ADMIN', tenantSlug: 'acme' },
//     //   { name: 'Acme User',  email: 'user@acme.test',  password: 'password', role: 'MEMBER', tenantSlug: 'acme' },
//     //   { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'ADMIN', tenantSlug: 'globex' },
//     //   { name: 'Globex User',  email: 'user@globex.test',  password: 'password', role: 'MEMBER', tenantSlug: 'globex' },
//     // ];
// const usersToCreate = [
//   { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'Admin', tenantSlug: 'acme' },
//   { name: 'Acme User',  email: 'user@acme.test',  password: 'password', role: 'Member', tenantSlug: 'acme' },
//   { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'Admin', tenantSlug: 'globex' },
//   { name: 'Globex User',  email: 'user@globex.test',  password: 'password', role: 'Member', tenantSlug: 'globex' },
// ];

//     for (const u of usersToCreate) {
//       const tenant = await Tenant.findOne({ slug: u.tenantSlug });
//       if (!tenant) {
//         console.error(`[SEED] SKIP user ${u.email} - tenant slug not found: ${u.tenantSlug}`);
//         continue;
//       }

//       const existingUser = await UserModel.findOne({ email: u.email });
//       if (existingUser) {
//         console.log(`[SEED] user exists: ${u.email}`);
//         let updated = false;
//         if (!existingUser.tenantId || existingUser.tenantId.toString() !== tenant._id.toString()) {
//           existingUser.tenantId = tenant._id;
//           updated = true;
//         }
//         if (existingUser.role !== u.role) {
//           existingUser.role = u.role;
//           updated = true;
//         }
//         if (updated) {
//           await existingUser.save();
//           console.log(`[SEED] updated user: ${u.email}`);
//         }
//         continue;
//       }

//       const hashed = await bcrypt.hash(u.password, 10);

//       const createdUser = await UserModel.create({
//         name: u.name,
//         email: u.email,
//         password: hashed,
//         tenantId: tenant._id,
//         role: u.role,
//       });

//       console.log(
//         `[SEED] created user: ${u.email} (id=${createdUser._id}) role=${u.role} tenant=${u.tenantSlug}`
//       );
//     }

//     console.log('[SEED] finished successfully');
//     process.exit(0);
//   } catch (err) {
//     console.error('[SEED] error:', err);
//     process.exit(1);
//   }
// })();





// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const Tenant = require('../models/Tenant');
// const { UserModel } = require("../models/UserModel");

// const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp_seed';

// (async () => {
//   try {
//     console.log('[SEED] connecting to', MONGO);
//     await mongoose.connect(MONGO);
//     console.log('[SEED] connected to MongoDB');

//     // Create tenants
//     const tenantsToCreate = [
//       { slug: 'acme', name: 'Acme Corporation', plan: 'FREE' },
//       { slug: 'globex', name: 'Globex Corporation', plan: 'FREE' },
//     ];

//     for (const t of tenantsToCreate) {
//       const existing = await Tenant.findOne({ slug: t.slug });
//       if (existing) {
//         console.log(`[SEED] tenant exists: ${t.slug} (id=${existing._id})`);
//       } else {
//         const created = await Tenant.create(t);
//         console.log(`[SEED] created tenant: ${t.slug} (id=${created._id})`);
//       }
//     }

//     // Mandatory test users (all password = "password")
//     const usersToCreate = [
//       { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'Admin', tenantSlug: 'acme' },
//       { name: 'Acme User',  email: 'user@acme.test',  password: 'password', role: 'Member', tenantSlug: 'acme' },
//       { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'Admin', tenantSlug: 'globex' },
//       { name: 'Globex User',  email: 'user@globex.test',  password: 'password', role: 'Member', tenantSlug: 'globex' },
//     ];

//     for (const u of usersToCreate) {
//       const tenant = await Tenant.findOne({ slug: u.tenantSlug });
//       if (!tenant) {
//         console.error(`[SEED] SKIP user ${u.email} - tenant slug not found: ${u.tenantSlug}`);
//         continue;
//       }

//       const existingUser = await UserModel.findOne({ email: u.email });
//       if (existingUser) {
//         console.log(`[SEED] user exists: ${u.email}`);
//         let updated = false;

//         if (!existingUser.tenantId || existingUser.tenantId.toString() !== tenant._id.toString()) {
//           existingUser.tenantId = tenant._id;
//           updated = true;
//         }

//         if (existingUser.role !== u.role) {
//           existingUser.role = u.role;
//           updated = true;
//         }

//         if (updated) {
//           await existingUser.save();
//           console.log(`[SEED] updated user: ${u.email}`);
//         }
//         continue;
//       }

//       const hashed = await bcrypt.hash(u.password, 10);

//       const createdUser = await UserModel.create({
//         name: u.name,
//         email: u.email,
//         password: hashed,
//         tenantId: tenant._id,
//         role: u.role,
//       });

//       console.log(`[SEED] created user: ${u.email} (id=${createdUser._id}) role=${u.role} tenant=${u.tenantSlug}`);
//     }

//     console.log('[SEED] finished successfully');
//     process.exit(0);
//   } catch (err) {
//     console.error('[SEED] error:', err);
//     process.exit(1);
//   }
// })();


// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const Tenant = require('../models/Tenant');
// const { UserModel } = require("../models/UserModel");

// const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp_seed';

// (async () => {
//   try {
//     console.log('[SEED] connecting to', MONGO);
//     await mongoose.connect(MONGO);
//     console.log('[SEED] connected to MongoDB');

//     // Tenants
//     const tenantsToCreate = [
//       { slug: 'acme', name: 'Acme Corporation', plan: 'FREE' },
//       { slug: 'globex', name: 'Globex Corporation', plan: 'FREE' },
//     ];

//     for (const t of tenantsToCreate) {
//       let tenant = await Tenant.findOne({ slug: t.slug });
//       if (!tenant) {
//         tenant = await Tenant.create(t);
//         console.log(`[SEED] created tenant: ${t.slug} (id=${tenant._id})`);
//       } else {
//         console.log(`[SEED] tenant exists: ${t.slug} (id=${tenant._id})`);
//       }
//     }

//     // Test users (password = "password")
//     const usersToCreate = [
//       { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'Admin', tenantSlug: 'acme' },
//       { name: 'Acme User',  email: 'user@acme.test',  password: 'password', role: 'Member', tenantSlug: 'acme' },
//       { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'Admin', tenantSlug: 'globex' },
//       { name: 'Globex User',  email: 'user@globex.test',  password: 'password', role: 'Member', tenantSlug: 'globex' },
//     ];

//     for (const u of usersToCreate) {
//       const tenant = await Tenant.findOne({ slug: u.tenantSlug });
//       if (!tenant) {
//         console.error(`[SEED] SKIP user ${u.email} - tenant not found`);
//         continue;
//       }

//       let user = await UserModel.findOne({ email: u.email });
//       const hashed = await bcrypt.hash(u.password, 10);

//       if (user) {
//         let updated = false;

//         if (!user.tenantId || user.tenantId.toString() !== tenant._id.toString()) {
//           user.tenantId = tenant._id;
//           updated = true;
//         }

//         if (user.role !== u.role) {
//           user.role = u.role;
//           updated = true;
//         }

//         const passwordMatches = await bcrypt.compare(u.password, user.password);
//         if (!passwordMatches) {
//           user.password = hashed;
//           updated = true;
//         }

//         if (updated) {
//           await user.save();
//           console.log(`[SEED] updated user: ${u.email}`);
//         } else {
//           console.log(`[SEED] no changes for user: ${u.email}`);
//         }
//       } else {
//         user = await UserModel.create({
//           name: u.name,
//           email: u.email,
//           password: hashed,
//           tenantId: tenant._id,
//           role: u.role,
//         });
//         console.log(`[SEED] created user: ${u.email} (id=${user._id})`);
//       }
//     }

//     console.log('\n✅ [SEED] Finished successfully');
//     console.log('👉 You can log in with:');
//     console.log('   admin@acme.test    / password');
//     console.log('   user@acme.test     / password');
//     console.log('   admin@globex.test  / password');
//     console.log('   user@globex.test   / password');

//     process.exit(0);
//   } catch (err) {
//     console.error('[SEED] error:', err);
//     process.exit(1);
//   }
// })();




require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Tenant = require("../models/Tenant");
const { UserModel } = require("../models/UserModel");
const { NoteModel } = require("../models/NoteModel"); // ✅ Correct note model

const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/notesapp_seed";

(async () => {
  try {
    console.log("[SEED] connecting to", MONGO);
    await mongoose.connect(MONGO);
    console.log("[SEED] connected to MongoDB");

    // ------------------------------
    // 1. Tenants
    // ------------------------------
    const tenantsToCreate = [
      { slug: "acme", name: "Acme Corporation", plan: "FREE" },
      { slug: "globex", name: "Globex Corporation", plan: "FREE" },
    ];

    for (const t of tenantsToCreate) {
      let tenant = await Tenant.findOne({ slug: t.slug });
      if (!tenant) {
        tenant = await Tenant.create(t);
        console.log(`[SEED] created tenant: ${t.slug} (id=${tenant._id})`);
      } else {
        console.log(`[SEED] tenant exists: ${t.slug} (id=${tenant._id})`);
      }
    }

    // ------------------------------
    // 2. Users (password = "password")
    // ------------------------------
    const usersToCreate = [
      { name: "Acme Admin", email: "admin@acme.test", password: "password", role: "Admin", tenantSlug: "acme" },
      { name: "Acme User", email: "user@acme.test", password: "password", role: "Member", tenantSlug: "acme" },
      { name: "Globex Admin", email: "admin@globex.test", password: "password", role: "Admin", tenantSlug: "globex" },
      { name: "Globex User", email: "user@globex.test", password: "password", role: "Member", tenantSlug: "globex" },
    ];

    const seededUsers = {};

    for (const u of usersToCreate) {
      const tenant = await Tenant.findOne({ slug: u.tenantSlug });
      if (!tenant) {
        console.error(`[SEED] SKIP user ${u.email} - tenant not found`);
        continue;
      }

      let user = await UserModel.findOne({ email: u.email });
      const hashed = await bcrypt.hash(u.password, 10);

      if (user) {
        let updated = false;

        if (!user.tenantId || user.tenantId.toString() !== tenant._id.toString()) {
          user.tenantId = tenant._id;
          updated = true;
        }

        if (user.role !== u.role) {
          user.role = u.role;
          updated = true;
        }

        const passwordMatches = await bcrypt.compare(u.password, user.password);
        if (!passwordMatches) {
          user.password = hashed;
          updated = true;
        }

        if (updated) {
          await user.save();
          console.log(`[SEED] updated user: ${u.email}`);
        } else {
          console.log(`[SEED] no changes for user: ${u.email}`);
        }
      } else {
        user = await UserModel.create({
          name: u.name,
          email: u.email,
          password: hashed,
          tenantId: tenant._id,
          role: u.role,
        });
        console.log(`[SEED] created user: ${u.email} (id=${user._id})`);
      }

      // store for notes seeding
      seededUsers[u.email] = user;
    }

    // ------------------------------
    // 3. Notes
    // ------------------------------
   // ------------------------------
// 3. Notes
// ------------------------------
const sampleNotes = [
  {
    title: "Welcome to Acme",
    body: "This is your first project note! 🎉\n\nFeel free to update, edit, and explore.",
    ownerEmail: "admin@acme.test",
  },
  {
    title: "Acme Roadmap",
    body: "📌 Upcoming:\n- Improve authentication flow\n- Add analytics dashboard\n- Fix mobile UI",
    ownerEmail: "user@acme.test",
  },
  {
    title: "Globex Kickoff",
    body: "🚀 Globex has officially joined the platform!\n\nStart by creating notes and assigning tasks.",
    ownerEmail: "admin@globex.test",
  },
  {
    title: "Globex Meeting Notes",
    body: "📝 Meeting recap:\n- Budget approved\n- Marketing campaign Q4\n- Hiring plans underway",
    ownerEmail: "user@globex.test",
  },
];

for (const n of sampleNotes) {
  const owner = seededUsers[n.ownerEmail];
  if (!owner) continue; // skip if user not found

  const existing = await NoteModel.findOne({
    title: n.title,
    user: owner._id,
  });

  if (existing) {
    console.log(`[SEED] note exists: ${n.title}`);
  } else {
    await NoteModel.create({
      title: n.title,
      body: n.body,         // ✅ use body
      user: owner._id,      // ✅ use user
      tenantId: owner.tenantId,
    });
    console.log(`[SEED] created note: ${n.title}`);
  }
}

    // ------------------------------
    // Done
    // ------------------------------
    console.log("\n✅ [SEED] Finished successfully");
    console.log("👉 You can log in with:");
    console.log("   admin@acme.test    / password");
    console.log("   user@acme.test     / password");
    console.log("   admin@globex.test  / password");
    console.log("   user@globex.test   / password");

    process.exit(0);
  } catch (err) {
    console.error("[SEED] error:", err);
    process.exit(1);
  }
})();

