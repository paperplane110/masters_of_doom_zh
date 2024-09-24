/* whether use violent language */
export const useViolang = () => useState<boolean>(
    'violang', () => true
)