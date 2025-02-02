import { Component } from "react";

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export enum DirectionType {
  left = "left",
  right = "right",
  up = "up",
  down = "down",
}
export enum TransitionType {
  ease = "ease ",
  linear = "linear ",
  easeIn = "ease-in",
  easeOut = "ease-out",
  easeInOut = "ease-in-out",
  cubicBezier = "cubic-bezier",
}

export const fadeIn = (
  direction: DirectionType,
  type: TransitionType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x:
        direction === DirectionType.left
          ? 100
          : direction === DirectionType.right
          ? -100
          : 0,
      y:
        direction === DirectionType.up
          ? 100
          : direction === DirectionType.down
          ? -100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: DirectionType,
  type: TransitionType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: Component,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
