export const getEnvs = ()=>{

    import.meta.env;

    return {
        ...(import.meta as any).env,
    }

}