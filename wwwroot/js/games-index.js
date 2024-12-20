$(document).ready(function ()
{
    $('.js-delete').on('click', function ()
    {
        var btn = $(this)
        /*console.log(btn.data('id'))*/

        const swal = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-danger mx-3",
                cancelButton: "btn btn-primary"
            },
            buttonsStyling: false
        });
        swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete ${btn.data('name')}? You won't be able to revert this`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            //console.log(result.isConfirmed);
            //console.log(`${btn.data('id')}`);
            //console.log(`${btn.data('name')}`);
            if (result.isConfirmed) {
                $.ajax(
                    {
                        url: `/Games/Delete/${btn.data('id')}`,
                        method: 'DELETE',

                        success: function () {
                            swal.fire({
                                title: "Deleted!",
                                text: `${btn.data('name')} has been deleted.`,
                                icon: "success"
                            });
                            btn.parents('tr').fadeOut();
                        },
                        error: function () {
                            swal.fire({
                                title: "Error",
                                text: "Something went wrong",
                                icon: "error"
                            });
                        }   
                    }
                );
            } 
        });
    })
});