export { };

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

    type Logo = {
        alt: string;
        link: string | null;
    }

    type HeroProps = {
        title: string;
        description: string;
        buttons: {
            title: string,
            link: string
        }[];
        images: {
            alt: string,
            link: string
        }[];
    }

    type Product = {
        id: number;
        name: string;
        description: string;
        category: {
            id: number;
            name: string;
            breadcrumb: string;
        };
        product_icon_photo: string;
    }

    type Manager = {
        id: number;
        name: string;
        photo: string;
        description: string;
        ordering: number;
    }

    type Certificate = {
        id: number;
        image: string;
        title: string;
        description: string;
    }

    type Variant = {
        id: number;
        customer_count: number;
    }

    type DemoProps = {
        image: string | null;
        title: string;
        subtitle: string;
        description: string;
        form: {
            title: string;
            description: string;
        };
    }

    type AboutUsProps = {
        image: string | null;
        title: string;
        description: string;
        projects: Product[];
    }

    type FooterProps = {
        title: string;
        description: string;
        address: string;
        socials: {
            icon: string,
            alt: string,
            link: string
        }[];
        emails: string[];
        phones: string[];
        copyright: string;
    }

    type WorkFieldProps = {}

    type HomePage = {
        logo: Logo;
        body_logo: Logo;
        hero: HeroProps;
        work_fields: WorkFieldProps;
        products: Product[];
        managers: Manager[];
        certificates: Certificate[];
        variants: Variant[];
        demo: DemoProps;
        about_us: AboutUsProps;
        footer: FooterProps;
    }
}