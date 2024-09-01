export const POST = async (req: Request) => {
  const contentType = req.headers.get('content-type');
  // eslint-disable-next-line no-console
  console.log('route Content-Type:', contentType);
 
  const fields: { [key: string]: any } = {};

  // eslint-disable-next-line no-console
  console.log('route FormData Fields:', JSON.stringify(fields, null, 2));

    const formData = await req.formData();

      formData.forEach((value, key) => {
    if (value instanceof File) {
      fields[key] = {
        fileName: value.name,
        fileType: value.type,
        fileSize: value.size,
      };
    } else {
      fields[key] = value.toString();
    }
  });

    // eslint-disable-next-line no-console
    console.log('FormData:', formData);
    // Process your formData here

    return Response.json(
      { success: true },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Content-Type': 'application/json',
        },
        status: 200,
      },
    );
};

