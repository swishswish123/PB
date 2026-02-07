export const projects = [
  {
    id: "quadruped",
    title: "Quadruped Robot",
    image: "quadruped/capsan_drive.png",
    short: "A four-legged robot for locomotion research.",
    description:
      "This project focuses on gait planning, balance control, and hardware integration.",
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving System",
    image: "autonomous/sunset.png",
    short: "Autonomous Racing Car with Multi-Modal Reinforcement Learning",
    description:
      "Developed an end-to-end deep reinforcement learning system for autonomous racing using Isaac Sim and SKRL, training a custom RC car to navigate complex tracks at high speeds. Designed a multi-modal neural network in PyTorch that fuses RGB camera observations with IMU and wheel encoder data, processing parallel environments for efficient training. Implemented custom reward functions for trajectory following and speed optimization. Trained PPO with domain randomization for sim-to-real transfer.",
  },
  {
    id: "skateboard",
    title: "Self-Driving Skateboard",
    image: "skateboard/proj_img.png",
    short: "An electric skateboard with balance control.",
    description: "Uses IMU sensors and PID control for stabilization.",
  },
];
