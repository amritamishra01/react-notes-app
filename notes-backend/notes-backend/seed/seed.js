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





require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Tenant = require('../models/Tenant');
const { UserModel } = require("../models/UserModel");

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp_seed';

(async () => {
  try {
    console.log('[SEED] connecting to', MONGO);
    await mongoose.connect(MONGO);
    console.log('[SEED] connected to MongoDB');

    // Create tenants
    const tenantsToCreate = [
      { slug: 'acme', name: 'Acme Corporation', plan: 'FREE' },
      { slug: 'globex', name: 'Globex Corporation', plan: 'FREE' },
    ];

    for (const t of tenantsToCreate) {
      const existing = await Tenant.findOne({ slug: t.slug });
      if (existing) {
        console.log(`[SEED] tenant exists: ${t.slug} (id=${existing._id})`);
      } else {
        const created = await Tenant.create(t);
        console.log(`[SEED] created tenant: ${t.slug} (id=${created._id})`);
      }
    }

    // Mandatory test users (all password = "password")
    const usersToCreate = [
      { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'Admin', tenantSlug: 'acme' },
      { name: 'Acme User',  email: 'user@acme.test',  password: 'password', role: 'Member', tenantSlug: 'acme' },
      { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'Admin', tenantSlug: 'globex' },
      { name: 'Globex User',  email: 'user@globex.test',  password: 'password', role: 'Member', tenantSlug: 'globex' },
    ];

    for (const u of usersToCreate) {
      const tenant = await Tenant.findOne({ slug: u.tenantSlug });
      if (!tenant) {
        console.error(`[SEED] SKIP user ${u.email} - tenant slug not found: ${u.tenantSlug}`);
        continue;
      }

      const existingUser = await UserModel.findOne({ email: u.email });
      if (existingUser) {
        console.log(`[SEED] user exists: ${u.email}`);
        let updated = false;

        if (!existingUser.tenantId || existingUser.tenantId.toString() !== tenant._id.toString()) {
          existingUser.tenantId = tenant._id;
          updated = true;
        }

        if (existingUser.role !== u.role) {
          existingUser.role = u.role;
          updated = true;
        }

        if (updated) {
          await existingUser.save();
          console.log(`[SEED] updated user: ${u.email}`);
        }
        continue;
      }

      const hashed = await bcrypt.hash(u.password, 10);

      const createdUser = await UserModel.create({
        name: u.name,
        email: u.email,
        password: hashed,
        tenantId: tenant._id,
        role: u.role,
      });

      console.log(`[SEED] created user: ${u.email} (id=${createdUser._id}) role=${u.role} tenant=${u.tenantSlug}`);
    }

    console.log('[SEED] finished successfully');
    process.exit(0);
  } catch (err) {
    console.error('[SEED] error:', err);
    process.exit(1);
  }
})();
