import * as HoverCard from '@radix-ui/react-hover-card';
import P from 'prop-types';
export default function CardHover({ children, icon }) {
    return (
        <HoverCard.Root openDelay={200}>
            <HoverCard.Trigger>{icon}</HoverCard.Trigger>
            <HoverCard.Content>
                <HoverCard.Arrow />
                {children}
            </HoverCard.Content>
        </HoverCard.Root>
    );
}
CardHover.propTypes = {
    children: P.node,
    icon: P.any,
};
