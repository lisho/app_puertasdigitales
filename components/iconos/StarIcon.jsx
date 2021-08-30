import { Icon } from "@chakra-ui/react";

const StarIcon = (props) => {
  return (
    <Icon height="24px" viewBox="0 0 24 24" width="24px" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </Icon>
  );
};

export default StarIcon;
