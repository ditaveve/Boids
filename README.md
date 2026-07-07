# Boids Simulation

A simple flocking simulation of autonomous agents (“boids”) that move in a group-like behaviour and avoid crowding each other while following a target.

## What it does

This project simulates multiple moving agents that:

- Move toward the mouse position
- Avoid getting too close to each other
- Maintain smooth, continuous motion
- Rotate visually based on direction of movement

## How it works

Each boid follows simple steering rules:

- **Seek**: moves toward a target position
- **Separation**: avoids nearby boids to prevent crowding
- **Physics update**: updates position, velocity, and acceleration over time

These simple rules combine to create emergent flocking behaviour.

## Files

- `index.html` – loads and runs the project
- `sketch.js` – main simulation loop
- `boid.js` – Boid class with movement and behaviour logic

## Running the project

Open `index.html` in a browser.

Or deploy it using GitHub Pages: https://ditaveve.github.io/Boids/

## Notes

This implementation uses only separation and seeking behaviours (no alignment or cohesion), so the flocking is simplified but still visually dynamic.
