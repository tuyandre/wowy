<button
    class="btn btn-primary my-2"
    data-bs-toggle="collapse"
    data-bs-target="#collapse-response-source"
    type="button"
    aria-expanded="false"
    aria-controls="collapse-response-source"
>
    {{ trans('plugins/payment::payment.view_response_source') }}
</button>
<div
    class="collapse"
    id="collapse-response-source"
>
    <div class="card card-body p-0">
        <pre class="p-2">
            <code>@php print_r($payment); @endphp</code>
        </pre>
    </div>
</div>
