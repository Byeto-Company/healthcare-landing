export {};

declare global {
    type ApiPaginated<T> = {
        count: number,
        next: string | null,
        previous: string | null,
        results: T[]
    }

    type Customer = {
        id: number,
        corporate_date: string,
        name: string,
        program_name: string,
        province: number,
        city: number
    }

    type Product = {
        id: number,
        title: string,
        description: string,
        label: string,
        image: string,
        slides: {
            id: number,
            image: string,
            description: string
        }[]
    }
}