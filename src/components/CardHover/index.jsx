import * as HoverCard from '@radix-ui/react-hover-card';
import P from 'prop-types';
import './styles.scss';
export default function CardHover({ children, icon }) {
    return (
        <HoverCard.Root openDelay={200}>
            <HoverCard.Trigger>{icon}</HoverCard.Trigger>
            <HoverCard.Content className="content">
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
