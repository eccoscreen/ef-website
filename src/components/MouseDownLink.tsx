'use client'
import Link, { LinkProps } from "next/link";
// import { useRouter } from "next/navigation";

/*
  TODO: Threejs seems to capture onClick events so for links overlaying the canvas we'll have to rely on mousedown event inbstead - 
  probably a cleaner solution somewhere but just getting to functional parity for now
*/
const MouseDownLink = (props: LinkProps & { children?: React.ReactNode, [key: string]: any }) => {
  // const router = useRouter();

  return (
    <Link
      {...props}
      onMouseDown={e => {
        e.stopPropagation();
        e.preventDefault();

        const isExternalLink = props.href.toString().startsWith('http');

        if (isExternalLink) {
          window.open(props.href.toString(), '_blank');
        } else {
          const transitionPageElement = document.getElementById("transition--container");

          if (transitionPageElement) {
            transitionPageElement.classList.remove("removed");
          }

          setTimeout(() => {
            document.location.href = props.href.toString();
          }, 1000)
        }

        // TODO: We need to properly dispose of threejs on client side navigation, but there is no trivial way to do it
        // router.push(props.href.toString())
      }}
    />
  );
}

export default MouseDownLink;