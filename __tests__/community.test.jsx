import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Community from '../components/Community'
import CommunityCard from '../components/CommunityCard'
import CommunityTitle from '../components/CommunityTitle'

describe('Community', () => {
    it('checking the text elements in the Community component', () => {
        render(<Community />)
        expect(screen.getAllByText(/Elvis/i)).toHaveLength(2);
        expect(screen.getByText(/Minecraft Villager/i)).toBeInTheDocument();
        expect(screen.getByText(/Hatsune Miku/i)).toBeInTheDocument();
        expect(screen.getAllByText(/45K uses · 1K likes/i)).toHaveLength(4);
    })
})

describe('CommunityCard', () => {
    it('checking the text elements in the CommunityCard component', () => {
        render(<CommunityCard />)
        expect(screen.getByAltText(/Image of AI Voice Character/i)).toBeInTheDocument();
        expect(screen.getByAltText(/favorite icon that looks like a heart/i)).toBeInTheDocument();
        expect(screen.getByAltText(/small head icon/i)).toBeInTheDocument();
    })
})

describe('CommunityTitle', () => {
    it('checking the text elements in the CommunityTitle component', () => {
        render(<CommunityTitle />)
        expect(screen.getByText(/Community/i)).toBeInTheDocument();
        expect(screen.getByText(/127/i)).toBeInTheDocument();
    })
})



