export default function AddContactIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 256 256"
    >
      <rect fill="none"></rect>
      <line
        x1="200"
        y1="136"
        x2="248"
        y2="136"
        fill="none"
        stroke={props.stroke || '#E0E0E5'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="224"
        y1="112"
        x2="224"
        y2="160"
        fill="none"
        stroke={props.stroke || '#E0E0E5'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <circle
        cx="108"
        cy="100"
        r="60"
        fill="none"
        stroke={props.stroke || '#E0E0E5'}
        stroke-miterlimit="10"
        stroke-width="16"
      ></circle>
      <path
        d="M22.2,200a112,112,0,0,1,171.6,0"
        fill="none"
        stroke={props.stroke || '#E0E0E5'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  );
}
