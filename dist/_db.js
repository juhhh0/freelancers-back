let freelancers = [
    { id: '1', name: 'Alice', skills: ['TypeScript', 'GraphQL'] },
    { id: '2', name: 'Bob', skills: ['JavaScript', 'Python'] },
    { id: '3', name: 'Charlie', skills: ['Go', 'Rust'] },
    { id: '4', name: 'David', skills: ['Java', 'Kotlin'] },
];
let reviews = [
    { id: '1', rating: 5, content: 'Excellent', freelancer_id: '1', recruiter_id: '1' },
    { id: '2', rating: 4, content: 'Great', freelancer_id: '2', recruiter_id: '2' },
    { id: '3', rating: 3, content: 'Good', freelancer_id: '3', recruiter_id: '1' },
    { id: '4', rating: 2, content: 'Fair', freelancer_id: '4', recruiter_id: '2' },
];
let recruiters = [
    { id: '1', name: 'Datagency' },
    { id: '2', name: 'Buckstar' },
];
export default { freelancers, reviews, recruiters };
