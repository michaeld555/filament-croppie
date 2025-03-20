<?php

namespace Michaeld555\FilamentCroppie\Components;

use Closure;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Str;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Livewire\Component as LivewireComponent;

class Croppie extends FileUpload
{

    protected string $view = 'filament-croppie::components.croppie-field';

    protected string | Closure | null $modalTitle = 'Manage Image';

    protected string | Closure | null $modalDescription = 'Crop the image to the correct proportion';

    protected string | Closure | null $modalIcon = 'heroicon-o-photo';

    protected string | Closure | null $modalSize = '4xl';

    protected string | Closure | null $customClasses = '';

    protected bool | Closure | null $enableOrientation = false;

    protected bool | Closure | null $enableResize = false;

    protected bool | Closure | null $enableZoom = true;

    protected bool | Closure | null $enforceBoundary = true;

    protected bool | Closure | string $mouseWheelZoom = true;

    protected bool | Closure | null $showZoomer = true;

    protected bool | Closure | null $forceCircleResult = false;

    protected string | Closure | null $viewportType = 'circle';

    protected string | Closure | null $viewportHeight = '200';

    protected string | Closure | null $viewportWidth = '200';

    protected string | Closure | null $boundaryHeight = '400';

    protected string | Closure | null $boundaryWidth = '600';

    protected string | Closure | null $imageFormat = 'png';

    protected string | Closure | null $imageSize = 'viewport';

    protected string | Closure | null $imageName = 'croppied-image';

    protected function setUp(): void
    {

        parent::setUp();

        $this->image();

        $this->maxFiles(1);

        $this->multiple(false);

        $this->visibility('public');

        $this->acceptedFileTypes([
            "image/png", "image/gif", "image/jpeg", "image/webp", "image/heic", "image/heif",
            "image/bmp", "image/tiff", "image/svg+xml", "image/x-icon", "image/vnd.microsoft.icon",
            "image/jp2", "image/jxr", "image/apng"
        ]);


        $this->imageName(Str::uuid()->toString());

        $this->multiple(false);

        $this->modalTitle(config('filament-croppie.modal.croppie-image.title', 'Manage Image'));

        $this->modalDescription(config('filament-croppie.modal.croppie-image.description', 'Crop the image to the correct proportion'));

        $this->modalIcon(config('filament-croppie.modal.croppie-image.icon', null));

        $this->modalSize(config('filament-croppie.modal.croppie-image.size', '4xl'));

        $this->boundaryHeight(config('filament-croppie.modal.croppie-image.boundary-height', '400'));

        $this->boundaryWidth(config('filament-croppie.modal.croppie-image.boundary-width', '600'));

        $this->viewportHeight(config('filament-croppie.modal.croppie-image.viewport-height', '200'));

        $this->viewportWidth(config('filament-croppie.modal.croppie-image.viewport-width', '200'));

        $this->enableResize(config('filament-croppie.modal.croppie-image.enable-resize', false));

        $this->enableZoom(config('filament-croppie.modal.croppie-image.enable-zoom', true));

        $this->showZoomer(config('filament-croppie.modal.croppie-image.show-zoomer', true));

        $this->viewportType(config('filament-croppie.modal.croppie-image.viewport-type', 'circle'));

        $this->afterStateUpdated(static function (Croppie $component, $state, LivewireComponent $livewire) {


            if ($state instanceof TemporaryUploadedFile) {

                $files = $component->getState();

                $url = $state->temporaryUrl();

                $fileName = pathinfo($state->getClientOriginalName(), PATHINFO_FILENAME);

                $livewire->dispatch('set-image-name-'.md5($component->getStatePath()), imageName: $fileName);

                foreach ($files as $key => $file) {

                    $livewire->dispatch('remove-all-crop-images-'.md5($component->getStatePath()), uuid: $key, statePath: $component->getStatePath());

                }

                $livewire->dispatch('open-modal', id: 'croppie-an-image-'.md5($component->getStatePath()), url: $url);

                return;

            }

            if (blank($state)) {

                return;

            }

            if (is_array($state)) {

                return;

            }

            $component->state([(string) Str::uuid() => $state]);

        });

    }

    public function modalTitle(string | Closure | null $modalTitle) : static
    {
        $this->modalTitle = $modalTitle;

        return $this;
    }

    public function getModalTitle(): ?string
    {
        return $this->evaluate($this->modalTitle);
    }

    public function modalDescription(string | Closure | null $modalDescription) : static
    {
        $this->modalDescription = $modalDescription;

        return $this;
    }

    public function getModalDescription(): ?string
    {
        return $this->evaluate($this->modalDescription);
    }

    public function modalIcon(string | Closure | null $modalIcon) : static
    {
        $this->modalIcon = $modalIcon;

        return $this;
    }

    public function getModalIcon(): ?string
    {
        return $this->evaluate($this->modalIcon);
    }

    public function modalSize(string | Closure | null $modalSize) : static
    {
        $this->modalSize = $modalSize;

        return $this;
    }

    public function getModalSize(): ?string
    {
        return $this->evaluate($this->modalSize);
    }

    public function customClasses(string | Closure | null $customClasses) : static
    {
        $this->customClasses = $customClasses;

        return $this;
    }

    public function getCustomClasses(): ?string
    {
        return $this->evaluate($this->customClasses);
    }

    public function enableOrientation(bool | Closure | null $enableOrientation) : static
    {
        $this->enableOrientation = $enableOrientation;

        return $this;
    }

    public function getEnableOrientation(): ?bool
    {
        return $this->evaluate($this->enableOrientation);
    }

    public function enableResize(bool | Closure | null $enableResize) : static
    {
        $this->enableResize = $enableResize;

        return $this;
    }

    public function getEnableResize(): ?bool
    {
        return $this->evaluate($this->enableResize);
    }

    public function enableZoom(bool | Closure | null $enableZoom) : static
    {
        $this->enableZoom = $enableZoom;

        return $this;
    }

    public function getEnableZoom(): ?bool
    {
        return $this->evaluate($this->enableZoom);
    }

    public function enforceBoundary(bool | Closure | null $enforceBoundary) : static
    {
        $this->enforceBoundary = $enforceBoundary;

        return $this;
    }

    public function getEnforceBoundary(): ?bool
    {
        return $this->evaluate($this->enforceBoundary);
    }

    public function mouseWheelZoom(bool | Closure | string $mouseWheelZoom) : static
    {
        $this->mouseWheelZoom = $mouseWheelZoom;

        return $this;
    }

    public function getMouseWheelZoom(): ?string
    {
        return $this->evaluate($this->mouseWheelZoom);
    }

    public function showZoomer(bool | Closure | null $showZoomer) : static
    {
        $this->showZoomer = $showZoomer;

        return $this;
    }

    public function getShowZoomer(): ?bool
    {
        return $this->evaluate($this->showZoomer);
    }

    public function forceCircleResult(bool | Closure | null $forceCircleResult) : static
    {
        $this->forceCircleResult = $forceCircleResult;

        return $this;
    }

    public function getForceCircleResult(): ?bool
    {
        return $this->evaluate($this->forceCircleResult);
    }

    public function viewportType(string | Closure | null $viewportType) : static
    {
        $this->viewportType = $viewportType;

        return $this;
    }

    public function getViewportType(): ?string
    {
        return $this->evaluate($this->viewportType);
    }

    public function viewportHeight(string | Closure | null $viewportHeight) : static
    {
        $this->viewportHeight = $viewportHeight;

        return $this;
    }

    public function getViewportHeight(): ?string
    {
        return $this->evaluate($this->viewportHeight);
    }

    public function viewportWidth(string | Closure | null $viewportWidth) : static
    {
        $this->viewportWidth = $viewportWidth;

        return $this;
    }

    public function getViewportWidth(): ?string
    {
        return $this->evaluate($this->viewportWidth);
    }

    public function boundaryHeight(string | Closure | null $boundaryHeight) : static
    {
        $this->boundaryHeight = $boundaryHeight;

        return $this;
    }

    public function getBoundaryHeight(): ?string
    {
        return $this->evaluate($this->boundaryHeight);
    }

    public function boundaryWidth(string | Closure | null $boundaryWidth) : static
    {
        $this->boundaryWidth = $boundaryWidth;

        return $this;
    }

    public function getBoundaryWidth(): ?string
    {
        return $this->evaluate($this->boundaryWidth);
    }

    public function imageFormat(string | Closure | null $imageFormat) : static
    {
        $this->imageFormat = $imageFormat;

        return $this;
    }

    public function getImageFormat(): ?string
    {
        return $this->evaluate($this->imageFormat);
    }

    public function imageSize(string | Closure | null $imageSize) : static
    {
        $this->imageSize = $imageSize;

        return $this;
    }

    public function getImageSize(): ?string
    {
        return $this->evaluate($this->imageSize);
    }

    public function imageName(string | Closure | null $imageName) : static
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getImageName(): ?string
    {
        return $this->evaluate($this->imageName);
    }

    public function imageEditor(bool | Closure $condition = true): static
    {
        $this->hasImageEditor = false;

        return $this;
    }

    public function multiple(bool | Closure $condition = false): static
    {
        $this->isMultiple = false;

        return $this;
    }

    public function maxFiles(int | Closure | null $count): static
    {
        $this->maxFiles = 1;

        return $this;
    }

    public function minFiles(int | Closure | null $count): static
    {
        $this->minFiles = 1;

        return $this;
    }

    public function getFieldWrapperView(?string $scope = null): string
    {
        if ($scope === 'croppie') {

            return $this->getCustomFieldWrapperView() ?? $this->getContainer()->getCustomFieldWrapperView() ?? 'filament-forms::field-wrapper';

        }

        return 'filament-croppie::blank-field-wrapper';

    }

}
