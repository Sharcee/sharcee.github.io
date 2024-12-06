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

**Estimated Reading Time:** ~10 minutes

---

Battleship, a classic game of hidden ships and strategic guessing, is often used as a case study for algorithmic decision-making and probability-based approaches. In this post, I'll walk you through a codebase I developed that attempts to solve or significantly improve the player’s strategy against a hidden enemy fleet. The project explores advanced tactics: Monte Carlo simulations to estimate ship placement probabilities, a hunt-then-target strategy for efficiently finding and sinking ships once a hit is made, and a parity-based search to reduce wasted moves when you have no partial information.

## What I Built

I developed a Python application using PyQt5 that presents a 10x10 Battleship board. The application maintains the following features:

1. **Monte Carlo Simulation for Probabilities:**  
   After each user action (declaring a miss, hit, or hit & sink), the program runs a Monte Carlo simulation. It randomly generates thousands of valid ship configurations that fit all known information (hits must be covered by a ship, misses cannot be covered, and no ships can overlap or even touch diagonally). Counting how often each cell ends up occupied by a ship across all these valid configurations provides a probability distribution over the board.

2. **Visual Probability Gradient:**  
   Each cell is color-coded according to its probability, ranging from white (0%) to bright red (100%), making it easy to visualize where the next best guess might be. A stronger red hue indicates a higher likelihood that a ship segment lurks there.

3. **Best Move Highlighted in Green:**  
   Among all unknown cells, the program selects one as the best next guess and highlights it in green. This helps you quickly identify the most promising cell to target next without manually interpreting the color gradient.

4. **Click-Based Interaction with a Pop-up Dialog:**  
   When you click on a cell, a dialog pops up. You must indicate one of three outcomes:
   - **Miss**: You found no ship there.
   - **Hit**: You hit a ship segment but haven’t sunk it.
   - **Hit and Sink**: The ship occupying that cell (and possibly adjacent hit cells) is now fully identified and sunk.
   
   After you provide this feedback, the board updates its probabilities accordingly.

5. **Disabling Surrounding Cells of Sunk Ships:**  
   Once a ship is sunk, the application automatically disables all cells around that ship, marking them as forbidden (`X`). This ensures the simulation won’t consider any future ships touching that now-known empty space. It also adheres to the standard Battleship rule: ships cannot be adjacent.

6. **Hunt-Then-Target Strategy & Parity-Based Searching:**  
   The program initially uses a parity-based search: it only checks cells that follow a checkerboard pattern. This strategy reduces wasted moves since it guarantees that any ship of length >1 must overlap with some parity cells.  
   
   Once it gets a hit, it switches to a “hunt-target” mode. Instead of continuing the parity search, it targets cells around the hit to quickly reveal and sink the entire ship. If multiple hits align in a row or column, it further narrows down the direction and focuses on completing that ship.

7. **Complex Ship Set:**  
   The code places a challenging fleet:  
   - 4 ships of size 1  
   - 3 ships of size 2  
   - 2 ships of size 3  
   - 1 ship of size 4  
   
   The Monte Carlo approach and heuristics remain effective despite this complex distribution.

## Under the Hood

### Monte Carlo Simulation Details

For each board state (given known hits, misses, forbidden cells), the Monte Carlo simulation tries to randomly place the full set of ships. It discards placements that break rules or fail to cover all known hits. After `N` iterations (e.g., 2,000 random placements), it counts how often each cell was occupied by a ship. Dividing by `N` yields a probability estimate.

The code leverages these probabilities to color the board and decide on the best move.

### Hunt-Target and Parity Strategy

1. **Parity Search (No Hits Yet):**  
   Before any ship is found, the solver shoots only at cells of one color of a checkerboard pattern. Since every ship must span at least two cells, it’s impossible to miss all ships if you cover only half the cells arranged in a checker pattern. This significantly reduces the search space and wasted moves.

2. **Hunt-Then-Target (After First Hit):**  
   Once a cell is hit, the approach changes. The solver tries to find more hits around that cell. If it finds a line (horizontal or vertical) of hits, it focuses solely on extending that line to find the ship’s endpoints and sink it quickly.

These heuristics are known from game theory analyses of Battleship. They drastically cut down the average number of guesses required to find and sink all ships.

## How to Improve

While the current solution is robust and demonstrates advanced concepts, there’s always room for improvement:

1. **Performance Optimization of Monte Carlo:**  
   Running 2,000 or more random placements per update might be slow, especially in Python. We could:
   - Cache intermediate states and reuse partial computations.
   - Use multiprocessing or Cython to speed up random placements.
   - Implement more pruning logic in the placement checks.

2. **Better Heuristics Beyond Parity:**  
   The parity approach is a great baseline. We could refine it by introducing probabilistic stratification:  
   - Early on, maybe try a known optimal pattern or spacing for guesses.
   - Once we have partial ship information, skew the Monte Carlo to produce less uniform samples and focus more on cells likely to belong to remaining ships.

3. **Adaptive Strategy Based on Remaining Ships:**  
   Knowing the distribution of ships still hidden, we can tailor the guess pattern. For instance, if only size-1 ships remain, parity offers no benefit, and a simpler uniform probability approach might suffice.

4. **Improved UI and Feedback:**  
   While the UI shows probabilities and the best move, we could add additional tooltips or overlays showing the calculated probability value on hover. Perhaps highlight hits in a different color gradient or show small indicators of how many ships remain.

5. **Integration with Data Analytics:**  
   Over multiple games, log the solver’s performance: average turns to win, hit-to-miss ratio, and so on. Use these metrics to iteratively improve the heuristics or Monte Carlo parameters.

## Conclusion

The project showcases a sophisticated Battleship solver, integrating probability analysis, game-theoretic insights, and interactive UI elements to guide the player’s moves. By combining a Monte Carlo simulation, a color-coded probability map, and a hunt-target strategy for hits, we achieve a more informed and efficient Battleship experience.

Although it’s already a strong solution, future enhancements could boost performance, refine heuristics, and provide more detailed feedback. This exploration stands as a testament to how classical board games can be both a fun and practical training ground for complex algorithmic and strategic thinking.