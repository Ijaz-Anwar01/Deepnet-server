// routes/menu.route.js
const express = require('express');
const Menu = require('../models/menu.model');
const router = express.Router();

// Create a new menu
router.post('/menus', async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = new Menu({
      name,
      description,
      items: []
    });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all menus with their items
router.get('/menus', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add item to a menu
router.post('/menus/:menuId/items', async (req, res) => {
  try {
    const { menuId } = req.params;
    const { name, description, price } = req.body;
    
    const menu = await Menu.findById(menuId);
    if (!menu) {
      return res.status(404).json({ error: 'Menu not found' });
    }

    menu.items.push({ name, description, price });
    await menu.save();
    
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific menu with items
router.get('/menus/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: 'Menu not found' });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;