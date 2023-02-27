import ClaySticker from "@clayui/sticker";

type AvatarProps = {
  imageUrl?: string;
  name?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbAPdbKWCW8JZRhrUGNhu0iPGABj_qkZEsxazxMk&s",
  name,
}) => {
  const image = "https://avatars.githubusercontent.com/u/22142104?v=4";
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        width: "50px",
        height: "50px",
        minWidth: "50px",
        minHeight: "50px",
        maxWidth: "50px",
        maxHeight: "50px",
      }}
    >
      {/* <ClaySticker size="xl" shape="circle" position="top-right">
        <ClaySticker.Image
          alt="placeholder"
          src="https://avatars.githubusercontent.com/u/22142104?v=4"
        />
      </ClaySticker> */}
    </div>
  );
};

export default Avatar;
