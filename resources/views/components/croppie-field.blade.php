<x-dynamic-component :component="$getFieldWrapperView('croppie')" :field="$field" :label-sr-only="$isLabelHidden()">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.min.js"></script>

    @php
        $modalTitle = $getModalTitle();
        $modalDescription = $getModalDescription();
        $modalIcon = $getModalIcon();
        $modalSize = $getModalSize();
        $customClasses = $getCustomClasses();
        $enableOrientation = $getEnableOrientation();
        $enableResize = $getEnableResize();
        $enableZoom = $getEnableZoom();
        $enforceBoundary = $getEnforceBoundary();
        $mouseWheelZoom = $getMouseWheelZoom();
        $showZoomer = $getShowZoomer();
        $forceCircleResult = $getForceCircleResult();
        $viewportType = $getViewportType();
        $viewportHeight = $getViewportHeight();
        $viewportWidth = $getViewportWidth();
        $boundaryHeight = $getBoundaryHeight();
        $boundaryWidth = $getBoundaryWidth();
        $imageFormat = $getImageFormat();
        $imageSize = $getImageSize();
        $imageName = $getImageName();
    @endphp

    <div x-load-css="[@js(\Filament\Support\Facades\FilamentAsset::getStyleHref('filament-croppie', package: 'michaeld555/filament-croppie'))]" x-load-js="[@js(\Filament\Support\Facades\FilamentAsset::getScriptSrc('filament-croppie', package: 'michaeld555/filament-croppie'))]">

        <div x-data="{

            imageName: 'croppied-image-{{ md5($getStatePath()) }}',

            isUploading: false,

            croppie: {},

            init() {

                let setImageName = addEventListener('set-image-name-{{ md5($getStatePath()) }}', (event) => {

                    this.imageName = event.detail.imageName;

                });

                let setCroppiedImageListener = addEventListener('set-croppied-image-{{ md5($getStatePath()) }}', (event) => {

                    this.isUploading = false;

                    $wire.set('{{ $getStatePath() }}', {
                        [event.detail.uuid]: event.detail.localFileName
                    });

                    $dispatch('close-modal', { id: 'croppie-an-image-{{ md5($getStatePath()) }}' });

                });

                let removeAllImagesListener = addEventListener('remove-all-crop-images-{{ md5($getStatePath()) }}', (event) => {
                    $wire.set('{{ $getStatePath() }}', {});
                });

                let openModalListener = addEventListener('open-modal', (event) => {

                    if (event.detail.id === 'croppie-an-image-{{ md5($getStatePath()) }}') {

                        this.$nextTick( () => {

                            this.croppie = new Croppie(document.getElementById('croppie-demo-{{ md5($getStatePath()) }}'), {
                                viewport: { width: {{ $viewportWidth }}, height: {{ $viewportHeight }}, type: '{{ $viewportType }}' },
                                boundary: { width: {{ $boundaryWidth }}, height: {{ $boundaryHeight }} },
                                url: event.detail.url,
                                showZoomer: {{ $showZoomer ? 'true' : 'false' }},
                                enableOrientation: {{ $enableOrientation ? 'true' : 'false' }},
                                customClass: '{{ $customClasses }}',
                                enableResize: {{ $enableResize ? 'true' : 'false' }},
                                enableZoom: {{ $enableZoom ? 'true' : 'false' }},
                                enforceBoundary: {{ $enforceBoundary ? 'true' : 'false' }},
                                mouseWheelZoom: {{ ($mouseWheelZoom == 'ctrl') ? 'ctrl' : ( $mouseWheelZoom ? 'true' : 'false') }},
                            });

                        });

                    }

                });

                let finishCroppieListener = addEventListener('finish-croppied-image-{{ md5($getStatePath()) }}', (event) => {

                    this.croppie.result({
                        type: 'base64',
                        size: '{{ $imageSize }}',
                        format: '{{ $imageFormat }}',
                        circle: {{ $forceCircleResult ? 'true' : 'false' }},
                    }).then((resp) => {

                        $dispatch('upload-croppied-image', {disk: '{{ $getDiskName() }}', base64Image: resp, statePath: '{{ md5($getStatePath()) }}', imageName: this.imageName, imageType: '{{ $imageFormat }}', directory: '{{ $getDirectory() }}', shouldPreserveFilenames: {{ $shouldPreserveFilenames() ? 'true' : 'false' }} });

                    });

                });

            },

        }">

            <x-filament::modal
                id="croppie-an-image-{{ md5($getStatePath()) }}"
                width="{{ $modalSize }}"
                heading="true"
                displayClasses="croppie-an-image-{{ md5($getStatePath()) }}"
                closeButton="true"
                icon="{{ $modalIcon }}"
                :close-by-clicking-away="false"
            >
                <x-slot name="heading">
                    <strong>{{ $modalTitle }}</strong>
                </x-slot>

                <x-slot name="description">
                    {{ $modalDescription }}
                </x-slot>

                <div class="container">

                    <div id="croppie-demo-{{ md5($getStatePath()) }}"></div>

                </div>

                <x-slot name="footer">

                    <div class="flex flex-row-reverse justify-between">

                        <div class="flex gap-3">
                            <x-filament::button color="gray" x-on:click="isOpen = false">
                                {{ Str::ucfirst(__('filament-croppie::messages.modal.croppie-image.cancel')) }}
                            </x-filament::button>

                            <x-filament::button
                                color="primary"
                                @click="$dispatch('finish-croppied-image-{{ md5($getStatePath()) }}', {}); isUploading = true;"
                                x-bind:disabled="isUploading"
                            >
                                <div class="flex gap-4">
                                    <x-filament::loading-indicator class="h-5 w-5" x-show="isUploading"></x-filament::loading-indicator>

                                    <span
                                        x-text="isUploading ? '{{ Str::ucfirst(__('filament-croppie::messages.modal.croppie-image.uploading')) }}' : '{{ Str::ucfirst(__('filament-croppie::messages.modal.croppie-image.send-image')) }}'"
                                    ></span>

                                </div>
                            </x-filament::button>
                        </div>

                    </div>

                </x-slot>

            </x-filament::modal>

            <div class="">

                @include('filament-croppie::components.file-upload')

            </div>

            @livewire('filament-croppie::update-file', ['statePath' => $getStatePath()], key($getStatePath()))

        </div>

    </div>

</x-dynamic-component>
