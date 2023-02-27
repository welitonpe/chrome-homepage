import ClayCard from "@clayui/card";
type CardPageProps = {
  classNames?: string;
  children?: JSX.Element | string;
  title?: string;
  description?: string;
};

const CardPage: React.FC<CardPageProps> = ({
  classNames,
  children,
  title,
  description,
}) => {
  if (!children) {
    return null;
  }

  return (
    <ClayCard className={classNames}>
      <ClayCard.Body>
        {title && (
          <ClayCard.Description displayType="title">
            {title}
          </ClayCard.Description>
        )}
        {description && (
          <ClayCard.Description truncate={false} displayType="text">
            {
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          </ClayCard.Description>
        )}
        {children}
      </ClayCard.Body>
    </ClayCard>
  );
};

export default CardPage;
