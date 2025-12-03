interface Dev {
    name: string;
    skills: string[];
    team?: string;
}

let backend: Dev = {
    name: 'John Doe',
    skills: ['go', 'ts'],
}

backend.name = 'Ronaldo';

console.table(backend);