import React, { useState, useMemo } from "react";
import styles from "../styles/Splitter.module.css";

/**
 * Splitter component
 * Default spec based on JSON:
 * - size: 507 x 10
 * - cornerRadius: 8
 * - fill: #eff6ff
 * - Acts like a thin scrollbar/separator
 */
const Splitter = ({
  width = 507,
  height = 10,
  radius = 8,
  color = "#eff6ff",
  className = "",
  style = {},
}) => {
  const [hovered, setHovered] = useState(false);

  const computedStyle = useMemo(
    () => ({
      width,
      height,
      borderRadius: radius,
      backgroundColor: color,
      ...style,
    }),
    [width, height, radius, color, style]
  );

  return (
    <div
      className={`${styles.splitter} ${hovered ? styles.hovered : ""} ${className}`}
      style={computedStyle}
      role="separator"
      aria-orientation="horizontal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default Splitter;
