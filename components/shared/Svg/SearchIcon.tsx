export default function SearchIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle 
        cx="116" 
        cy="116" 
        r="84" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"
      ></circle>
      <line 
        x1="175.4" 
        y1="175.4" 
        x2="224" 
        y2="224" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"}  
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"></line>
    </svg>
  )
}