type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggein: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggein
          ? `Welcom ${props.name}! You have ${messageCount}
        unread messages`
          : 'welcom Guest'}
      </h2>
    </div>
  );
};
