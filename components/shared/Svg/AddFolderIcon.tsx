export default function AddFolderIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <path 
        d="M216.9,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8V200.9A7.1,7.1,0,0,1,216.9,208Z" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"></path>
      <path 
        d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"}  
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"></path>
      <line 
        x1="104" 
        y1="144" 
        x2="152" 
        y2="144" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"}  
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"></line>
      <line 
        x1="128" 
        y1="120" 
        x2="128" 
        y2="168" 
        fill="none" 
        stroke={props.stroke || "#E0E0E5"}  
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="16"></line>
    </svg>
  )
}