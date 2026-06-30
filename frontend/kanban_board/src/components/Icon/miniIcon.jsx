export const ArrowIcon = ({ children, className, ...props }) => {
    const style = className.split(" ")
    let color = style.filter(item => {
        return item.includes("fill")
    })
    color = color[0]
    color = color.slice(5)
  return (
    <>
      <svg
        width="106"
        height="101"
        viewBox="0 0 106 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M104.482 24.0141C96.4775 49.451 63.0359 66.8832 4.15736 76.3107"
          stroke={`${color}`}
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <path
          d="M0.430882 77.8222C-0.0232023 77.5078 -0.136467 76.8849 0.177899 76.4308L5.30078 69.0311C5.61515 68.577 6.2381 68.4637 6.69218 68.7781C7.14627 69.0924 7.25953 69.7154 6.94517 70.1695L2.39149 76.747L8.96904 81.3007C9.42312 81.6151 9.53639 82.238 9.22202 82.6921C8.90765 83.1462 8.2847 83.2594 7.83062 82.9451L0.430882 77.8222ZM6.50009 76L6.67898 76.9839L1.17898 77.9839L1.00009 77L0.821205 76.0161L6.32121 75.0161L6.50009 76Z"
          fill={`${color}`}
        />
      </svg>
    </>
  );
};
