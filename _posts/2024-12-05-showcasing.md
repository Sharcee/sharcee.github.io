---
layout: post
title:  "Showcasing My Battleship Probability Checker with Game-Theoretic Enhancements"
date:   2024-12-05
categories:
  - Programming
  - Python
description: "A deep dive into a Battleship solver that uses Monte Carlo simulation, probability gradients, and a hunt-target search algorithm."
image: assets/images/radar1.jpg
image-sm: 
excerpt: "Exploring a sophisticated Battleship solver using Python and PyQt5. Combining Monte Carlo probability, parity-based searching, and a hunt-then-target approach to improve your game."
---

# Battleship Probability Checker

**Estimated Reading Time:** ~10 minutes

Battleship, a classic game of hidden ships and strategic guessing, is often used as a case study for algorithmic decision-making and probability-based approaches. In this post, I'll walk you through a codebase I developed that attempts to solve or significantly improve the player's strategy against a hidden enemy fleet. The project explores advanced tactics: Monte Carlo simulations to estimate ship placement probabilities, a hunt-then-target strategy for efficiently finding and sinking ships once a hit is made, and a parity-based search to reduce wasted moves when you have no partial information.

## Key Features

The Python application, built with PyQt5, presents a 10x10 Battleship board with the following features:

### 1. Monte Carlo Simulation for Probabilities
After each user action (declaring a miss, hit, or hit & sink), the program runs a Monte Carlo simulation. It randomly generates thousands of valid ship configurations that fit all known information (hits must be covered by a ship, misses cannot be covered, and no ships can overlap or even touch diagonally). Counting how often each cell ends up occupied by a ship across all these valid configurations provides a probability distribution over the board.

### 2. Visual Probability Gradient
Each cell is color-coded according to its probability, ranging from white (0%) to bright red (100%), making it easy to visualize where the next best guess might be. A stronger red hue indicates a higher likelihood that a ship segment lurks there.

### 3. Best Move Highlighting
Among all unknown cells, the program selects one as the best next guess and highlights it in green. This helps you quickly identify the most promising cell to target next without manually interpreting the color gradient.

### 4. Interactive Gameplay
When you click on a cell, a dialog pops up. You must indicate one of three outcomes:
- **Miss**: You found no ship there
- **Hit**: You hit a ship segment but haven't sunk it
- **Hit and Sink**: The ship occupying that cell is now fully identified and sunk

### 5. Intelligent Ship Placement Rules
Once a ship is sunk, the application automatically disables all cells around that ship, marking them as forbidden (`X`). This ensures the simulation won't consider any future ships touching that now-known empty space.

### 6. Advanced Search Strategies
The program implements two key strategies:
- **Parity-based search**: Initially checks cells in a checkerboard pattern
- **Hunt-then-target mode**: Switches to targeted searching once a hit is found

### 7. Complex Ship Distribution
The code handles a challenging fleet composition:
- 4 ships of size 1
- 3 ships of size 2
- 2 ships of size 3
- 1 ship of size 4

## Technical Implementation

### Monte Carlo Simulation
For each board state, the simulation:
1. Randomly places the full set of ships
2. Validates against known hits, misses, and forbidden cells
3. Repeats for N iterations (typically 2,000)
4. Calculates probability distributions for each cell

### Search Strategy Implementation
The solver employs two distinct phases:

1. **Initial Parity Search**
   - Targets cells in a checkerboard pattern
   - Guarantees finding ships of length > 1
   - Reduces wasted moves significantly

2. **Hunt-Then-Target Phase**
   - Activates after first hit
   - Focuses on adjacent cells to found ships
   - Prioritizes completing partially-found ships

## Future Improvements

### 1. Performance Optimization
- Cache intermediate states
- Implement multiprocessing
- Optimize placement validation

### 2. Enhanced Search Strategies
- Develop more sophisticated parity patterns
- Implement probabilistic stratification
- Add adaptive search based on remaining ships

### 3. UI Enhancements
- Add probability value tooltips
- Improve hit visualization
- Include remaining ship indicators

### 4. Analytics Integration
- Track solver performance metrics
- Implement iterative improvements
- Add performance logging

## Conclusion

This Battleship solver demonstrates the power of combining probability analysis, game theory, and interactive visualization. While already providing strong gameplay guidance, the project has room for continued optimization and enhancement. It serves as an excellent example of how classical games can be used to explore complex algorithmic concepts and strategic decision-making.